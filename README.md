# Exemple d'application Angular avec l'extension openlayers du Geoportail.

## Creation d'un projet Angular
https://angular.io/guide/quickstart#first-component

https://github.com/angular/angular-cli

https://code.tutsplus.com/tutorials/creating-your-first-angular-app-components-part-1--cms-30113

## Installation des dépendences
>npm i --save geoportal-extensions-openlayers

>npm i --save openlayers

>npm i --save xmldom

### FIXME
patch :  
Dans le fichier "node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js" remplacer :
>node: false  

par :  
   >node: {  
            fs: 'empty',  
            global: true,  
            crypto: 'empty',  
            tls: 'empty',  
            net: 'empty',  
            process: true,  
            module: false,  
            clearImmediate: false,  
            setImmediate: false  
        }

## Execution
>ng serve

Puis ouvrir le navigateur sur l'url suivante : http://localhost:4200/
