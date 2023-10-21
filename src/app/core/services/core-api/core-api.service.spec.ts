import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { CoreApiService } from './core-api.service';

export interface Acao {
    id: number;
    nome: string;
    quantidade: number;
    preco: number;
    pvp: number;
}
describe('CoreApiService', () => {
    let service: CoreApiService<Acao>;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
        });
        service = TestBed.inject(CoreApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Quando a função findAll for chamada deve retornar a resposta com sucesso', (done) => {
        const url = 'http://localhost:3000/acoes';
        const acao: Acao[] = [
            {
                id: 1,
                nome: 'CEMIG4',
                quantidade: 100,
                preco: 12.45,
                pvp: 1.15,
            },
        ];

        service.findAll(url).subscribe((resp: Acao[]) => {
            expect(resp).toEqual(acao);
            done();
        });

        const req = httpMock.expectOne(url);

        expect(req.request.method).toBe('GET');
        req.flush(acao);
    });

    it('Quando a função findAll for chamada deve retornar erro', () => {
        const url = 'http://localhost:3000/acoes';

        service.findAll(url).subscribe(() => {
            fail('Erro'),
            (error: HttpErrorResponse) => {
                expect(error.status).toEqual(404);
            };
        });

        const req = httpMock.expectOne(url);
        req.flush('404 error', { status: 404, statusText: 'Not found' });
    });

    it('Quando a função post for chamada deve cadastrar os dados', (done) => {
        const url = 'http://localhost:3000/acoes';
        const acao: Acao = {
            id: 1,
            nome: 'CEMIG4',
            quantidade: 100,
            preco: 12.45,
            pvp: 1.15,
        };

        service.post(url, acao).subscribe((resp: Acao) => {
            expect(resp).toEqual(acao);
            done();
        });

        const req = httpMock.expectOne(url);

        expect(req.request.method).toBe('POST');
        req.flush(acao);
    });
});
