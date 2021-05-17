import {Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/home/productos/productos.component';
import { AlmohadonesComponent } from './components/home/productos/almohadones/almohadones.component';
import { AlmohadonesBordadosComponent } from './components/home/productos/almohadones/almohadones-bordados/almohadones-bordados.component';
import { AlmohadonesEstampadosComponent } from './components/home/productos/almohadones/almohadones-estampados/almohadones-estampados.component';
import { AlmohadonesFamiliasComponent } from './components/home/productos/almohadones/almohadones-familias/almohadones-familias.component';
import { AlmohadonesLisosComponent } from './components/home/productos/almohadones/almohadones-lisos/almohadones-lisos.component';
import { AlmohadonesPielsinteticaComponent } from './components/home/productos/almohadones/almohadones-pielsintetica/almohadones-pielsintetica.component';
import { PuffsComponent } from './components/home/puffs/puffs.component';
import { PuffsPelocortoComponent } from './components/home/puffs/puffs-pelocorto/puffs-pelocorto.component';
import { PuffsPelolargoComponent } from './components/home/puffs/puffs-pelolargo/puffs-pelolargo.component';
import { MantasComponent } from './components/home/productos/mantas/mantas.component';
import { ArrimesComponent } from './components/home/arrimes/arrimes.component';
import { ArrimesChapaComponent } from './components/home/arrimes/arrimes-chapa/arrimes-chapa.component';
import { ArrimesHierroComponent } from './components/home/arrimes/arrimes-hierro/arrimes-hierro.component';
import { ArrimesMaderaComponent } from './components/home/arrimes/arrimes-madera/arrimes-madera.component';
import { PatasComponent } from './components/home/productos/patas/patas.component';
import { PatasAluminioComponent } from './components/home/productos/patas/patas-aluminio/patas-aluminio.component';
import { PatasChapaComponent } from './components/home/productos/patas/patas-chapa/patas-chapa.component';
import { PatasMaderaComponent } from './components/home/productos/patas/patas-madera/patas-madera.component';
import { OtrosComponent } from './components/home/productos/otros/otros.component';
import { OtrosEspejosComponent } from './components/home/productos/otros/otros-espejos/otros-espejos.component';
import { OtrosEstantesComponent } from './components/home/productos/otros/otros-estantes/otros-estantes.component';
import { OtrosMacetasComponent } from './components/home/productos/otros/otros-macetas/otros-macetas.component';
import { OtrosPercherosComponent } from './components/home/productos/otros/otros-percheros/otros-percheros.component';
import { OtrosVeladoresComponent } from './components/home/productos/otros/otros-veladores/otros-veladores.component';
import { ContactoComponent } from './components/home/contacto/contacto.component';













const APP_ROUTES: Routes = [
    {path: 'home' , component : HomeComponent },
    {path: 'productos' , component : ProductosComponent },
    {path: 'almohadones' , component : AlmohadonesComponent },
    {path: 'almohadones/bordados' , component : AlmohadonesBordadosComponent },
    {path: 'almohadones/estampados' , component : AlmohadonesEstampadosComponent },
    {path: 'almohadones/familias' , component : AlmohadonesFamiliasComponent },
    {path: 'almohadones/lisos' , component : AlmohadonesLisosComponent },
    {path: 'almohadones/pielsintetica' , component : AlmohadonesPielsinteticaComponent },
    {path: 'puffs' , component: PuffsComponent},
    {path: 'puffs/pelocorto', component: PuffsPelocortoComponent},
    {path: 'puffs/pelolargo', component: PuffsPelolargoComponent},
    {path: 'mantas' , component : MantasComponent },
    {path: 'arrime' , component: ArrimesComponent},
    {path: 'arrime/chapa', component: ArrimesChapaComponent},
    {path: 'arrime/hierro', component: ArrimesHierroComponent},
    {path: 'arrime/madera', component: ArrimesMaderaComponent},
    {path: 'patas' , component : PatasComponent },
    {path: 'patas/aluminio' , component : PatasAluminioComponent },
    {path: 'patas/chapa' , component : PatasChapaComponent },
    {path: 'patas/madera' , component : PatasMaderaComponent },
    {path: 'otros' , component : OtrosComponent },
    {path: 'otros/espejos' , component : OtrosEspejosComponent },
    {path: 'otros/estantes' , component : OtrosEstantesComponent },
    {path: 'otros/macetas' , component : OtrosMacetasComponent },
    {path: 'otros/percheros' , component : OtrosPercherosComponent },
    {path: 'otros/veladores' , component : OtrosVeladoresComponent },
    {path: 'contacto' , component : ContactoComponent },
    {path: '**' ,  pathMatch:'full', redirectTo:'home'},  
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
