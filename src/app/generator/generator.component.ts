import { Component } from '@angular/core';
// import * as html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
// library needed for saving meme somewhere in file explorer
import * as FileSaver from 'file-saver';


@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.css']
})

export class GeneratorComponent {
    topText: string = 'Enter top text here';
    bottomText: string = 'Enter bottom text here';
    imageName: string = 'Vin Diesel';
    colorName: string = 'black';

    /*Meme's names and files should be the same order in both lists */

    // a List to store meme's names
    imageNameList: string[] = ['Vin Diesel', 'Redneck', 'Trump', 'Think Guy', 'Vladimir Putin', 'Office Space Boss'];
    // a List to stores file names of all memes
    imageFileNameList: string[] = ['vin_diesel.jpg', 'redneck.jpg', 'trump.jpg', 'think_guy.jpg', 'putin.jpg', 'office.jpg'];

    /* function to switch between images */
    changeImage() {
        var valueOfSearch: string = '';
        for (var i = 0; i < this.imageNameList.length; i++) {
            if (this.imageNameList[i] === this.imageName) {
                valueOfSearch = this.imageFileNameList[i];
            }
        }
        // console.log(valueOfSearch);
        // console.log(this.imageName);
        var whole: string = 'assets/' + valueOfSearch;
        return whole;
    }

    /* function to capture contents of the div element (id='imagebox') to download the meme */
    downloadImage() {
        var pic = document.querySelector('#imagebox') as HTMLCanvasElement;
        html2canvas(pic).then(function(canvas) {
            // Convert the canvas to blob
            canvas.toBlob(function(blob) {
                // To download directly on browser default 'downloads' location
                let link = document.createElement('a');
                link.download = 'image.png';
                link.href = URL.createObjectURL(blob);
                link.click();

                // To save manually somewhere in file explorer
                // FileSaver.saveAs(blob, 'image.png');

            }, 'image/png');
        });
    }
}
