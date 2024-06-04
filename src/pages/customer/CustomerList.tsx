import { IonButtons, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
import Customer from './Customer';


const CustomerList: React.FC = () => {
  const [clientes, setClientes] = useState<Customer[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(() => {
    search();
  },[history.location.pathname]);

  const search = async () => {
    let result = await searchCustomer()
    setClientes(result)
  }

  const remove = async (id:string) => {
    await removeCustomer(id);
    search()
  }

  const addCustomer = () => {
    history.push('customers/new')
  }

  const editCustomer = (id: string) => {
    history.push('customers/' + id)
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
            <IonTitle className='table-title'>Gestion de Clientes</IonTitle>

            <IonItem>
                <IonButton onClick={addCustomer} color="primary" fill='outline' slot="end" size='default'>
                    <IonIcon icon={add} />
                    Agregar Cliente
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
                {clientes.map((cliente: Customer) => 

                    <IonRow key={cliente.id}>
                        <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                        <IonCol>{cliente.email}</IonCol>
                        <IonCol>{cliente.phone}</IonCol>
                        <IonCol>{cliente.address}</IonCol>
                        <IonCol>
                            <IonButton onClick={() => editCustomer(String(cliente.id))} color='primary' fill='clear'>
                                <IonIcon icon={pencil} slot="icon-only" />
                            </IonButton>
                            <IonButton onClick={() => remove(String(cliente.id))} color='danger' fill='clear'>
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

export default CustomerList;