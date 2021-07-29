<p align="center">
    <img src="https://cdn.svgporn.com/logos/angular-icon.svg" width="164"/>
    </br>
    <h1 align="center">Angular</h1> 
</p>

# Introdução
- Qual o propósito do Angular?
  - Angular é um framework baseado em **TypeScript** voltado para o desenvolvimento de SPAs (Single Page Application).

# Principais Conceitos
- **Components**
  - São blocos independentes de código, assim possuindo um próprio escopo dentro da aplicação. É formado pela junção de três arquivos(.ts .html .css).
- **Diretivas**
  - São marcadores em um elemento DOM (como um atributo) que informam ao Angular para anexar um comportamento especificado a um elemento existente. As diretivas existem desde o AngularJS; na nova versão são usadas com componentes, principalmente para criar tags personalizadas em uma aplicação Angular.
    - **Diretiva de Atributo**
      - Altera a **aparência** e o **comportamento** de um elemento, componente ou outra diretiva.
    - **Diretiva de Estrutura**
      - altera o layout **adicionando** e **removendo** elementos do DOM.
- **Binding**
  - Os bindings em angular são as formas de como a View interage com Model/(Component). Interpolation ou interpolação em português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de métodos do componente para o template HTML.
    - Property Binding
      - Uma variável que está dentro de uma classe no arquivo **.TS** pode ser acessada pelo arquivo **.HTML** por meio da propriedade/atributo [dataSource],que recebe como atribuição o mesmo nome da variável que está fazendo referência na classe.
        - **HTML**
          ```html
            <table [dataSource]="products"></table>
          ```
        - **TS**
          ```ts
            export class ProductReadComponent implements OnInit {
              products: Product[]
            }
          ```
  - **Event Binding**
    - Para fazer uma ligação de um evento que ocorre dentro de um arquivo **.HTML** como um método de uma classe que está dentro do arquivo **.TS** o evento deve ser encapsulado com parênteses,  **(click)**, e receber como atribuição o nome do método da classe.
      - **HTML**
        ```html
          <table (click)="createProduct()"></table>
        ```
      - **TS**
        ```ts
          export class ProductReadComponent implements OnInit { 
            createProduct() : void {}
          }
        ```
  - **One Way Data Binding**
    - Manipulação de dados é unidirecional, ocorrendo do arquivo **.TS** para o arquivo **.HTML**.
      ```html
      <input [value]="nome" />
      ```
  - **Two Way Data Binding**
    - Manipulação de dados é bidirecional, quando uma alteração ocorrer no arquivo **.HTML** ela também será refletida no arquivo **.TS**, o contrario também ocorre.
      ```html
        <input [(gnModel)]="nome" />
      ```
- **Pipes**
  - São **formatadores** de dados.
    ```html
      <td mat-cell *matCellDef="let product">
      {{ product.price | current: ´BRL'  }}
      </td>
    ```
- **Routes**
  - São os caminhos/rotas, cada uma aponta para um determinado componente/page. 
- **Observables**
  - Padrão orientado a eventos, funciona como uma interface para lidar com uma variedade de operações assíncronas comuns.

    ![Programa Reativa](https://raw.githubusercontent.com/henrique2m/Angular-Studies/main/docs/observes.png)

- **Services**
  - São classes que têm como objetivo organizar e compartilhar métodos e/ou dados entre componentes.
  - Injeção de dependência

    - Padrão pelo qual uma classe recebe as dependências de uma fonte externa ao invés de criar por conta própria.
    - [Mais Sobre Injeção de Dependência](https://angular.io/guide/hierarchical-dependency-injection)

  - Services são ***Singletons*** (uma única instância) dentro do escopo de um injector.
    - **ModuleInjector**
        - @NgModule
        - @Injectable
    - **ElementInjector**
        - @Directive
        - @Component
#
# Comandos da CLI
- Instala a CLI
  ```
    npm i -g @angular/cli
  ```
- Inicia um projeto Angular com todos os arquivos
  ```
    ng new my-app
  ```
- Inicia um projeto Angular com o mínimo necessário

  ```
    ng new frontend --minimal
  ```

- Adiciona o pacote do material design

  ```
    ng add @angular/material
  ```
- Cria um componente

  ```
    ng generate component components/template/header
  ```

  ```
    ng g c components/template/header
  ```
- Cria um service
  ```
  ng g s services/product
  ```
- Cria uma diretiva
  ```
  ng g d directives/red
  ```

# License

MIT © [Henrique Moreira](https://www.linkedin.com/in/henrique-moreira-51699618b/)
