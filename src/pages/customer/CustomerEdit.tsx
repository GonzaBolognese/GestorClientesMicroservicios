import { IonButtons, IonButton, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonInput, IonCol } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveCustomer, searchCustomerById } from './CustomerApi';
import Customer from './Customer';


const CustomerEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string;}>();
    const [customer, setCustomer] = useState<Customer>({});
    const history = useHistory();

  useEffect(() => {
    search();
  },[history.location.pathname]);

  const search = async () => {
    // let result = searchCustomer()
    // setClientes(result)
    
    if(id !== "new"){
      let result = await searchCustomerById(id);
      setCustomer(result);
    }
  }

  const save = async () => {
    await saveCustomer(customer)
    history.push('/folder/customers');
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
            <IonTitle>{id === 'new' ? 'Agregar Cliente': 'Editar Cliente'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => customer.firstname = e.detail.value?.toString()} 
                  label="Nombre" labelPlacement="stacked" placeholder="Ingrese el nombre" value={customer.firstname}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => customer.lastname = e.detail.value?.toString()} 
                    label="Apellido" labelPlacement="stacked" placeholder="Ingrese el apellido" value={customer.lastname}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => customer.email = e.detail.value?.toString()} 
                      label="Email" labelPlacement="stacked" placeholder="Ingrese el email" value={customer.email}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => customer.phone = e.detail.value?.toString()} 
                      label="Telefono" labelPlacement="stacked" placeholder="Ingrese el telefono" value={customer.phone}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => customer.address = e.detail.value?.toString()} 
                    label="Direccion" labelPlacement="stacked" placeholder="Ingrese la direccion" value={customer.address}></IonInput>
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

export default CustomerEdit;