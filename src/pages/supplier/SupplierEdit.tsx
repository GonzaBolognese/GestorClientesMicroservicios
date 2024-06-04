import { IonButtons, IonButton, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonInput, IonCol } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveSupplier, searchSupplierById } from './SupplierApi';
import Supplier from './Supplier';


const SupplierEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string; }>();
    const [supplier, setSupplier] = useState<Supplier>({});
    const history = useHistory();

  useEffect(() => {
    search();
  },[]);

  const search = async () => {
    // let result = searchSupplier()
    // setProovedors(result)
    if(id !== "new"){
      let result = await searchSupplierById(id);
      setSupplier(result);
    }
  }

  const save = async () => {
    await saveSupplier(supplier)
    history.push('/folder/suppliers');
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
            <IonTitle>{id === 'new' ? 'Agregar Proovedor': 'Editar Proovedor'}</IonTitle>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.name = e.detail.value?.toString()} 
                  label="Nombre" labelPlacement="stacked" placeholder="Ingrese el nombre" value={supplier.name}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.email = e.detail.value?.toString()} 
                      label="Email" labelPlacement="stacked" placeholder="Ingrese el email" value={supplier.email}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.phone = e.detail.value?.toString()} 
                      label="Telefono" labelPlacement="stacked" placeholder="Ingrese el telefono" value={supplier.phone}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.address = e.detail.value?.toString()} 
                    label="Direccion" labelPlacement="stacked" placeholder="Ingrese la direccion" value={supplier.address}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.contact = e.detail.value?.toString()} 
                      label="Contacto" labelPlacement="stacked" placeholder="Ingrese un Contacto" value={supplier.contact}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => supplier.web = e.detail.value?.toString()} 
                      label="Web" labelPlacement="stacked" placeholder="Ingrese una direccion Webs" value={supplier.web}></IonInput>
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

export default SupplierEdit;