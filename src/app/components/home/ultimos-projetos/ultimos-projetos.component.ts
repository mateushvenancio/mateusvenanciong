import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/models/projeto.model';
import { ProjetosService } from 'src/app/services/projetos.service';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-ultimos-projetos',
    templateUrl: './ultimos-projetos.component.html',
    styleUrls: ['./ultimos-projetos.component.css']
})
export class UltimosProjetosComponent implements OnInit {

    projetos: Projeto[] = []
    githubIcon = faGithub
    faShare = faShare

    constructor(private service: ProjetosService) { }

    ngOnInit(): void {
        this.getProjetos()
    }

    getProjetos() {
        this.service.getProjetos().subscribe(
            result => {
                let _result: any = result
                _result.forEach(
                    item => {
                        let _projeto = new Projeto()
                        _projeto.title = item['name']
                        _projeto.description = item['description']
                        _projeto.projeto_url = item['html_url']
                        this.projetos.push(_projeto)
                    }
                )
            }
        )
    }
}
