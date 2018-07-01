import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AnaliseRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { AnaliseCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { AnaliseLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { AnaliseDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { AnaliseTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { AnaliseEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { AnaliseJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { AnaliseJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AnaliseRegionMySuffixModule,
        AnaliseCountryMySuffixModule,
        AnaliseLocationMySuffixModule,
        AnaliseDepartmentMySuffixModule,
        AnaliseTaskMySuffixModule,
        AnaliseEmployeeMySuffixModule,
        AnaliseJobMySuffixModule,
        AnaliseJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AnaliseEntityModule {}
