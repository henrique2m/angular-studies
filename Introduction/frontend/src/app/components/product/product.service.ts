import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-Bar";
import { EMPTY } from "rxjs";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private apiHttp: HttpClient) {}

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-success"] : ["msg-success"],
    });
  }

  create(product: Product): Observable<Product> {
    return this.apiHttp.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  read(): Observable<Product[]> {
    return this.apiHttp.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.apiHttp.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.apiHttp.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.apiHttp.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
