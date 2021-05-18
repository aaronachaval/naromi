import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { CategoriesService } from './services/categories.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyComponent } from './components/body/body.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeComponent } from './components/home/home.component';
import { Foto1Component } from './components/body/partes/foto1/foto1.component';
import { Foto2Component } from './components/body/partes/foto2/foto2.component';
import { CarrouselpcComponent } from './components/body/partes/carrouselpc/carrouselpc.component';
import { CarrouselcelComponent } from './components/body/partes/carrouselcel/carrouselcel.component';
import { CarrouselfinComponent } from './components/body/partes/carrouselfin/carrouselfin.component';
import { NewsletterpcComponent } from './components/body/partes/newsletterpc/newsletterpc.component';
import { MapaComponent } from './components/body/partes/mapa/mapa.component';
import { CarrouseliniComponent } from './components/body/partes/carrouselini/carrouselini.component';
import { AlmohadonesComponent } from './components/home/productos/almohadones/almohadones.component';

import { MantasComponent } from './components/home/productos/mantas/mantas.component';

import { PatasComponent } from './components/home/productos/patas/patas.component';
import { OtrosComponent } from './components/home/productos/otros/otros.component';
import { AlmohadonesBordadosComponent } from './components/home/productos/almohadones/almohadones-bordados/almohadones-bordados.component';
import { AlmohadonesEstampadosComponent } from './components/home/productos/almohadones/almohadones-estampados/almohadones-estampados.component';
import { AlmohadonesFamiliasComponent } from './components/home/productos/almohadones/almohadones-familias/almohadones-familias.component';
import { AlmohadonesLisosComponent } from './components/home/productos/almohadones/almohadones-lisos/almohadones-lisos.component';
import { AlmohadonesPielsinteticaComponent } from './components/home/productos/almohadones/almohadones-pielsintetica/almohadones-pielsintetica.component';

import { PatasMaderaComponent } from './components/home/productos/patas/patas-madera/patas-madera.component';
import { PatasAluminioComponent } from './components/home/productos/patas/patas-aluminio/patas-aluminio.component';
import { PatasChapaComponent } from './components/home/productos/patas/patas-chapa/patas-chapa.component';
import { OtrosEspejosComponent } from './components/home/productos/otros/otros-espejos/otros-espejos.component';
import { OtrosVeladoresComponent } from './components/home/productos/otros/otros-veladores/otros-veladores.component';
import { OtrosMacetasComponent } from './components/home/productos/otros/otros-macetas/otros-macetas.component';
import { OtrosEstantesComponent } from './components/home/productos/otros/otros-estantes/otros-estantes.component';
import { OtrosPercherosComponent } from './components/home/productos/otros/otros-percheros/otros-percheros.component';

import { ContactoComponent } from './components/home/contacto/contacto.component';
import { ProductosComponent } from './components/home/productos/productos.component';

import { PuffsComponent } from './components/home/puffs/puffs.component';
import { ArrimesComponent } from './components/home/arrimes/arrimes.component';
import { ArrimesChapaComponent } from './components/home/arrimes/arrimes-chapa/arrimes-chapa.component';
import { ArrimesHierroComponent } from './components/home/arrimes/arrimes-hierro/arrimes-hierro.component';
import { ArrimesMaderaComponent } from './components/home/arrimes/arrimes-madera/arrimes-madera.component';

import { PuffsPelolargoComponent } from './components/home/puffs/puffs-pelolargo/puffs-pelolargo.component';
import { PuffsPelocortoComponent } from './components/home/puffs/puffs-pelocorto/puffs-pelocorto.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    HomeComponent,
    Foto1Component,
    Foto2Component,
    CarrouselpcComponent,
    CarrouselcelComponent,
    CarrouselfinComponent,
    NewsletterpcComponent,
    MapaComponent,
    CarrouseliniComponent,
    AlmohadonesComponent,

    MantasComponent,

    PatasComponent,
    OtrosComponent,
    AlmohadonesBordadosComponent,
    AlmohadonesEstampadosComponent,
    AlmohadonesFamiliasComponent,
    AlmohadonesLisosComponent,
    AlmohadonesPielsinteticaComponent,

    PatasMaderaComponent,
    PatasAluminioComponent,
    PatasChapaComponent,
    OtrosEspejosComponent,
    OtrosVeladoresComponent,
    OtrosMacetasComponent,
    OtrosEstantesComponent,
    OtrosPercherosComponent,

    ContactoComponent,
    ProductosComponent,

    PuffsComponent,
    ArrimesComponent,
    ArrimesChapaComponent,
    ArrimesHierroComponent,
    ArrimesMaderaComponent,

    PuffsPelolargoComponent,
    PuffsPelocortoComponent,


  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    APP_ROUTING
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
