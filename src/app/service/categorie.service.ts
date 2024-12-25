import { ICategory } from '../interfaces/Category'; 
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://localhost:3200/categories'; 

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.baseUrl); 
  }

  getCategoryById(id: string | number | undefined): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.baseUrl}/${id}`);
  }

  createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.baseUrl}`, category); 
  }

  updateCategory(id: string | number | undefined, category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.baseUrl}/${id}`, category); 
  }

  deleteCategory(id: string | number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`); 
  }

  searchCategories(keywords: string): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}`, { params: { name_like: keywords } }); 
  }
}
