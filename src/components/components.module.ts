import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { CamerasComponent } from './cameras/cameras';
import { VeiculoComponent } from './veiculo/veiculo';
import { TempoRealVeiculosComponent } from './tempo-real-veiculos/tempo-real-veiculos';
import { DashboardComponent } from './dashboard/dashboard';
import { DetailServiceComponent } from './detail-service/detail-service';
import { NotificationComponent } from './notification/notification';
import { ViolationComponent } from './violation/violation';
import { FinalizedComponent } from './finalized/finalized';
import { ComentariosOcorrenciaComponent } from './comentarios-ocorrencia/comentarios-ocorrencia';
import { FinalizadosComponent } from './finalizados/finalizados';
import { IntimateComponent } from './intimate/intimate';
import { WaitingComponent } from './waiting/waiting';
import { TimelineComponent } from './timeline/timeline';
import { TabMenuComponent } from './tab-menu/tab-menu';
import { GroupViolationsComponent } from './groupViolations/groupViolations';
@NgModule({
	declarations: [ExpandableComponent,
      CamerasComponent,
      VeiculoComponent,
      TempoRealVeiculosComponent,
      DashboardComponent,
      DetailServiceComponent,
      NotificationComponent,
      ViolationComponent,
      FinalizedComponent,
      ComentariosOcorrenciaComponent,
      FinalizadosComponent,
      IntimateComponent,
      WaitingComponent,
      TimelineComponent,
      TabMenuComponent,
      GroupViolationsComponent
  ],
	imports: [],
	exports: [ExpandableComponent,
      CamerasComponent,
      VeiculoComponent,
      TempoRealVeiculosComponent,
      DashboardComponent,
      DetailServiceComponent,
      NotificationComponent,
      ViolationComponent,
      FinalizedComponent,
      ComentariosOcorrenciaComponent,
      FinalizadosComponent,
      IntimateComponent,
      WaitingComponent,
      TimelineComponent,
      TabMenuComponent,
      GroupViolationsComponent
    ]
})
export class ComponentsModule {}
