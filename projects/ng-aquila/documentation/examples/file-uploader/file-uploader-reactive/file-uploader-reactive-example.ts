import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    NxFileUploadConfig,
    NxFileUploader,
} from '@aposin/ng-aquila/file-uploader';
import {
    NxMessageToastConfig,
    NxMessageToastService,
} from '@aposin/ng-aquila/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const myCustomConfig: NxMessageToastConfig = {
    duration: 3000,
    context: 'success',
    announcementMessage: 'Yay, you see a success message toast',
};

/** @title File uploader reactive form example */
@Component({
    selector: 'file-uploader-reactive-example',
    templateUrl: './file-uploader-reactive-example.html',
    styleUrls: ['./file-uploader-reactive-example.css'],
})
export class FileUploaderReactiveExampleComponent implements OnInit, OnDestroy {
    uploadConfig: NxFileUploadConfig = {
        requestUrl: 'file-upload',
        options: {
            params: new HttpParams(),
            reportProgress: true,
        },
    };

    uploader = new NxFileUploader(this.uploadConfig, this.http);

    testForm = new FormGroup({
        documents: new FormControl([], Validators.required),
    });

    private readonly _destroyed = new Subject<void>();

    constructor(
        private messageToastService: NxMessageToastService,
        private http: HttpClient,
    ) {}

    ngOnInit() {
        this.uploader.response
            .pipe(takeUntil(this._destroyed))
            .subscribe(result => {
                if (result.success) {
                    this.messageToastService.open(
                        'All files were uploaded successfully!',
                        myCustomConfig,
                    );
                } else if (result.error) {
                    // error handling
                    console.log(result.error);
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
