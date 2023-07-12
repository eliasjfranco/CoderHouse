import { FormControl} from '@angular/forms';

export interface Register {

    email: FormControl<string | null>;
    password: FormControl<string | null>;
    city: FormControl<string | null>;
    address: FormControl<string | null>;
    phone: FormControl<string | null>;

}
