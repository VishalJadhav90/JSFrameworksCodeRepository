import { Injectable} from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  activatedEmitter: Subject<boolean> = new Subject();
}
