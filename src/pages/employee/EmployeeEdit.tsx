import { IonButtons, IonButton, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonInput, IonCol } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveEmployee, searchEmployeeById } from './EmployeeApi';
import Employee from './Employee';


const EmployeeEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string; }>();
    const [employee, setEmployee] = useState<Employee>({});
    const history = useHistory();

  useEffect(() => {
    search();
  },[]);

  const search = async () => {
    // let result = searchEmployee()
    // setEmpleados(result)
    if(id !== "new"){
      let result = await searchEmployeeById(id);
      setEmployee(result);
    }
  }

  const save = async () => {
    await saveEmployee(employee)
    history.push('/folder/employees');
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
            <IonTitle>{id === 'new' ? 'Agregar Empleado': 'Editar Empleado'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.firstname = e.detail.value?.toString()} 
                  label="Nombre" labelPlacement="stacked" placeholder="Ingrese el nombre" value={employee.firstname}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.lastname = e.detail.value?.toString()} 
                    label="Apellido" labelPlacement="stacked" placeholder="Ingrese el apellido" value={employee.lastname}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.email = e.detail.value?.toString()} 
                      label="Email" labelPlacement="stacked" placeholder="Ingrese el email" value={employee.email}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.phone = e.detail.value?.toString()} 
                      label="Telefono" labelPlacement="stacked" placeholder="Ingrese el telefono" value={employee.phone}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.address = e.detail.value?.toString()} 
                    label="Direccion" labelPlacement="stacked" placeholder="Ingrese la direccion" value={employee.address}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => employee.salary = Number(e.detail.value)} 
                    label="Salario" labelPlacement="stacked" placeholder="Ingrese el salario" value={employee.salary}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
           
            <IonItem>
                <IonButton onClick={save} color="success" fill='solid' slot="end" size='default'>
                    <IonIcon icon={checkmark} />
                    Guardar
                </IonButton>
            </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;