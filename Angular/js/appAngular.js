(function (ng) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(AppModule);
    });

    class AppComponent {
        constructor() {
            this.title = 'Hola Mundo';
        }
    }

    AppComponent.annotations = [
        new ng.core.Component({
            selector: 'app-root',
            template: '<h1>{{ title }}</h1>'
        })
    ];

    class AppModule { }

    AppModule.annotations = [
        new ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
    ];
})(window.ng);