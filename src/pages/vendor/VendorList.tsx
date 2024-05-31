import { IonButtons, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, searchVendor } from './VendorApi';
import Vendor from './Vendor';


const VendorList: React.FC = () => {
  const [proovedors, setProovedors] = useState<Vendor[]>([]);
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  useEffect(() => {
    search();
  },[history.location.pathname]);

  const search = () => {
    let result = searchVendor()
    setProovedors(result)
  }

  const remove = (id:string) => {
    removeVendor(id);
    search()
  }

  const addVendor = () => {
    history.push('vendors/new')
  }

  const editVendor = (id: string) => {
    history.push('vendors/' + id)
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
            <IonTitle className='table-title'>Gestion de Proovedors</IonTitle>

            <IonItem>
                <IonButton onClick={addVendor} color="primary" fill='outline' slot="end" size='default'>
                    <IonIcon icon={add} />
                    Agregar Proovedor
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
                {proovedors.map((proovedor: Vendor) => 

                    <IonRow key={proovedor.id}>
                        <IonCol>{proovedor.firstname} {proovedor.lastname}</IonCol>
                        <IonCol>{proovedor.email}</IonCol>
                        <IonCol>{proovedor.phone}</IonCol>
                        <IonCol>{proovedor.address}</IonCol>
                        <IonCol>
                            <IonButton onClick={() => editVendor(String(proovedor.id))} color='primary' fill='clear'>
                                <IonIcon icon={pencil} slot="icon-only" />
                            </IonButton>
                            <IonButton onClick={() => remove(String(proovedor.id))} color='danger' fill='clear'>
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

export default VendorList;