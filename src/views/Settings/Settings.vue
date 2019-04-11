<template>
  <v-app>
    <TopBar/>
    <v-content class="background">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-navigation-drawer floating stateless value="true" width="500">
            <v-list dense>
              <v-list-tile v-for="item in items" :key="item.title" @click>
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
        </v-layout>
      </v-container>
      <!--AQUI ENTRA O CONTAINER COM OS DADOS-->
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import TopBar from '../../components/shared/TopBar/Toolbar.vue';
import BottomNav from '../../components/shared/BottomNav/BottomMenu.vue';
import EditUser from './components/EditUser.vue';
import EditPet from './components/EditPet.vue';
import EditDevice from './components/EditDevice.vue';
import EditHealth from './components/EditHealth.vue';

export default {
  components: {
    TopBar,
    BottomNav,
    EditUser,
    EditPet,
    EditDevice,
    EditHealth,
  },
  data() {
    return {
      items: [
        {
          title: 'Editar Informações de Usuário',
          icon: 'perm_identity',
          to: '/editUser',
        },
        {
          title: 'Editar Informações do Animal',
          icon: 'pets',
          to: '/editPet',
        },
        {
          title: 'Editar Informações de Dispositivos',
          icon: 'important_devices',
          to: '/editDevice',
        },
        {
          title: 'Editar Informações de Saúde',
          icon: 'favorite',
          to: '/editHealth',
        },
      ],
      right: null,
    };
  },
};
</script>

<style>
#buttomStyle {
  padding: 0px;
  height: 40px;
  width: 180px;
  line-height: 10px;
  font-weight: normal;
  font-size: 1em;
  text-align: center;
  margin: 10px;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 25px #aaa;
  border-radius: 10px;
}
</style>
