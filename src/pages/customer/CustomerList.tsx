import { IonButtons, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add } from 'ionicons/icons';


const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

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
                <IonButton color="primary" fill='outline' slot="end" size='medium'>
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
                <IonRow>
                    <IonCol>Mauro Zarate</IonCol>
                    <IonCol>Mauza@gmail.com</IonCol>
                    <IonCol>47550812</IonCol>
                    <IonCol>Saracho 1455</IonCol>
                    <IonCol>
                        Boton Editar
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Nombre</IonCol>
                    <IonCol>Email</IonCol>
                    <IonCol>Telefono</IonCol>
                    <IonCol>Dirección</IonCol>
                    <IonCol>Acciones</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Nombre</IonCol>
                    <IonCol>Email</IonCol>
                    <IonCol>Telefono</IonCol>
                    <IonCol>Dirección</IonCol>
                    <IonCol>Acciones</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>Nombre</IonCol>
                    <IonCol>Email</IonCol>
                    <IonCol>Telefono</IonCol>
                    <IonCol>Dirección</IonCol>
                    <IonCol>Acciones</IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} /> 
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;