import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Projeto } from 'src/app/models/projeto.model';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    projetos: Projeto[] = []
    githubIcon = faGithub

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
