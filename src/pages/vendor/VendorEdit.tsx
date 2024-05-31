import { IonButtons, IonButton, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon, IonInput, IonCol } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { saveVendor, searchVendorById } from './VendorApi';
import Vendor from './Vendor';


const VendorEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string; }>();
    const [vendor, setVendor] = useState<Vendor>({});
    const history = useHistory();

  useEffect(() => {
    search();
  },[]);

  const search = () => {
    // let result = searchVendor()
    // setProovedors(result)
    if(id !== "new"){
      let result = searchVendorById(id);
      setVendor(result);
    }
  }

  const save = () => {
    saveVendor(vendor)
    history.push('/folder/vendors');
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
                  <IonInput onIonChange={e => vendor.firstname = e.detail.value?.toString()} 
                  label="Nombre" labelPlacement="stacked" placeholder="Ingrese el nombre" value={vendor.firstname}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => vendor.lastname = e.detail.value?.toString()} 
                    label="Apellido" labelPlacement="stacked" placeholder="Ingrese el apellido" value={vendor.lastname}></IonInput>
                </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => vendor.email = e.detail.value?.toString()} 
                      label="Email" labelPlacement="stacked" placeholder="Ingrese el email" value={vendor.email}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => vendor.phone = e.detail.value?.toString()} 
                      label="Telefono" labelPlacement="stacked" placeholder="Ingrese el telefono" value={vendor.phone}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonInput onIonChange={e => vendor.address = e.detail.value?.toString()} 
                    label="Direccion" labelPlacement="stacked" placeholder="Ingrese la direccion" value={vendor.address}></IonInput>
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

export default VendorEdit;