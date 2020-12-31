import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links = [
    {
      'titulo': 'Site',
      'url': 'http://mateusvenancio.com.br'
    },
    {
      'titulo': 'LinkedIn',
      'url': 'http://linkedin.com/in/mateushvenancio'
    },
    {
      'titulo': 'GitHub',
      'url': 'http://github.com/mateushvenancio'
    },
    {
      'titulo': 'Spotify',
      'url': 'https://open.spotify.com/playlist/2LVjN2MBncaFzYr9WfM1og?si=xEyByQk_RgOdBRHT--PqTg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
