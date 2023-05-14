<template>
  <MainLayout>
  </MainLayout>
  <section id="intro">
    <header class="d-flex justify-content-center align-items-center text-align-center" style="position: absolute;width: 100%;height: 40% ;margin-top: 2.5%">
      <div id="intro-example" class="p-5 justify-content-center align-items-center text-center bg-image" style="width: 100% ;height: 100% ;">
        <div class="mask text-center" style="background-color: rgba(0, 0, 0, 0.7); height: 50%; margin-top: 5%;">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">Rūpējies par savu auto kopā ar mums!</h1>
              <h5 class="mb-4">
                Uztici savu auto profesionāļiem, kas tev ieteiks labāko risinājumu
              </h5>
              <a class="btn btn-outline-light btn-lg m-2" href="/category"
                 role="button" rel="nofollow" target="_blank">Pakalpojumi</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </section>
  <section id="about">
    <div class="container justify-content-center align-items-center text-align-center" style="width: 100%; height: 600px; color: white; justify-content: center; align-items: center">
      <div class="text" style="margin-top: 7%;">
        <h3 class="mb-4 text-center">
          Automeistars
        </h3>
        <h5 class="mb-4 text-center">
          Autoserviss Rīgā, pateicoties darbinieku ilggadējai pieredzei un augstajai atbildības sajūtai, kā arī modernam aprīkojumam, saviem klientiem spēj nodrošināt daudzveidīgus, profesionālus un kvalitatīvus risinājumus – visu, kas nepieciešams, lai automašīna kalpotu droši, uzticami un ilgi, nepieviļot svarīgās dzīves situācijās. Mūsu komanda lieliski saprot – automašīna ir neaizvietojams un svarīgs palīgs Tavās ikdienas gaitās, tāpēc mūsu autoserviss vienmēr ikvienam nodrošina tikai augsta līmeņa remontdarbus un tehniskās apkopes, turklāt tik operatīvi, cik vien iespējams. Varam garantēt, ka Automeistars.lv autoserviss Rīgā ir īstā vieta, kur iegriezties, ja auto ir negaidīti izgājis no ierindas – ar katru automašīnu, kas nonāk mūsu servisā, apejamies pēc vislabākās sirdsapziņas un rūpējamies par to tāpat kā par savu personīgo. Šī iemesla dēļ mūsu autoserviss Rīgā ir kļuvis par vienu no iecienītākajiem un uzticamākajiem auto īpašnieku lokā, par ko liecina arī klientu lielā atsaucība.

          Visus Autoserviss.lv darbiniekus vieno viens vienīgs mērķis – lai katrs, kurš pie mums iegriežas pēc palīdzības, dotos prom apmierināts ar servisa paveikto darbu un laimīgs par lieliskā darba kārtībā esošu auto, ar kuru var droši piedalīties ceļu satiksmē.

          Mūsu autoserviss Rīgā piedāvā iepazīties ar plašo darbu klāstu un cenām – Tu būsi patīkami pārsteigts!

          Ja neatrodi Tev vēlamo darbu zemāk redzamajā sarakstā, zvani mums vai brauc ciemos uz mūsu autoservisu Sarkandaugavā Ganību dambī 45.
        </h5>
      </div>
    </div>
  </section>
</template>
<script>
import MainLayout from "../layouts/MainLayout.vue";

export default {
  components: {MainLayout},

  layout: 'MainLayout',
}

</script>
<style>

#intro{
  width: 100%;
  height: auto;
  background-image: url("public/img/Screenshot_80.png");
  background-color:grey;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 50vh;

  margin: 0px;
}
#about{
  width: 100%;
  height: auto;
  background-color: #2C3333;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 40vh;

  margin: 0px;
}
header{
  position:fixed;
  z-index: 1000;
  height: 100%;
  left: 0;
  top: 0;
}

#intro-example {
  height: 400px;
}

/* Height for devices larger than 992px */
@media (min-width: 992px) {
  #intro-example {
    height: 600px;
  }
}

body{
  background-color: #1A1E21;
}
.body-div{
  z-index: 1000;
  left: 0;
  top: 0;
  height: 80%;
}
</style>