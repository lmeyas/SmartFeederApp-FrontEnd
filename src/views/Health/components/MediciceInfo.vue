<template>
  <div>
    <v-layout row wrap>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">VACINA V8</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">VACINA V10</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Antirrábica</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Eptospirose</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Leishmaniose</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Tosse dos Canis</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Carrapaticida</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="my-2 ml-3">
        <v-card id="medicineCard" class="medicineCard">
          <v-card-text style="font-size: 1.5em;">Vermicida</v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/lastMedicine.png" height="35px">
              <p class="textFont">15/04/2018</p>
            </v-container>
            <v-container grid-list-md text-xs-center>
              <img src="../../../assets/images/medicine/nextMedicine.png" height="35px">
              <p class="textFont">15/04/2019</p>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    bones: [
      {
        url_active: '../../../assets/images/rate_icon/bone_icon_active.png',
        url_inactive: '../../../assets/images/rate_icon/bone_icon_inactive.png',
      },
    ],
    waterDrop: [
      {
        url_active: '../../../assets/images/rate_icon/drop_icon_active.png',
        url_inactive: '../../../assets/images/rate_icon/drop_icon_inactive.png',
      },
    ],
  }),
};
</script>

<style>
#medicineCard {
  padding: 5px;
  height: 150px;
  width: 250px;
  line-height: 20px;
  font-weight: normal;
  text-align: center;
  margin: 0px;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: 0px 5px 25px #aaa;
  border-radius: 10px;
}

.textFont {
  font-size: 1em;
}
</style>
