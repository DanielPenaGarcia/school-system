import { School } from "../school.model";
import { User } from "../user.model";

export interface InitSchool {
    school: School;
    user: User;
}