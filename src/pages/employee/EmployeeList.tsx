import { IonButtons, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, searchEmployee } from './EmployeeApi';
import Employee from './Employee';


const EmployeeList: React.FC = () => {
  const [empleados, setEmpleados] = useState<Employee[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(() => {
    search();
  },[history.location.pathname]);

  const search = async () => {
    let result = await searchEmployee()
    setEmpleados(result)
  }

  const remove = async (id:string) => {
    await removeEmployee(id);
    search()
  }

  const addEmployee = () => {
    history.push('employees/new')
  }

  const editEmployee = (id: string) => {
    history.push('employees/' + id)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
            <IonTitle className='table-title'>Gestion de Empleados</IonTitle>

            <IonItem>
                <IonButton onClick={addEmployee} color="primary" fill='outline' slot="end" size='default'>
                    <IonIcon icon={add} />
                    Agregar Empleado
                </IonButton>
            </IonItem>
            <IonGrid className='table'>
                <IonRow>
                    <IonCol>Nombre</IonCol>
                    <IonCol>Email</IonCol>
                    <IonCol>Telefono</IonCol>
                    <IonCol>Dirección</IonCol>
                    <IonCol>Acciones</IonCol>
                </IonRow>
                {empleados.map((empleado: Employee) => 

                    <IonRow key={empleado.id}>
                        <IonCol>{empleado.firstname} {empleado.lastname}</IonCol>
                        <IonCol>{empleado.email}</IonCol>
                        <IonCol>{empleado.phone}</IonCol>
                        <IonCol>{empleado.address}</IonCol>
                        <IonCol>
                            <IonButton onClick={() => editEmployee(String(empleado.id))} color='primary' fill='clear'>
                                <IonIcon icon={pencil} slot="icon-only" />
                            </IonButton>
                            <IonButton onClick={() => remove(String(empleado.id))} color='danger' fill='clear'>
                                <IonIcon icon={close} slot="icon-only" />
                            </IonButton>
                        </IonCol>
                    </IonRow>

                )}
            </IonGrid>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;