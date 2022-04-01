import { Component, OnInit, VERSION } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  booking_text = '';

  async ngOnInit(): Promise<void> {
    console.log('test');
    let { user, error } = await supabase.auth.signIn({
      email: 'sf@wogra.com',
      password: 'asdfasdf',
    });
    console.log(user);
    console.log(error);
    console.log(supabase.from('hcm'));
    let { data } = await supabase.from('hcm').select('*');
    console.log(data);
    this.booking_text = data[0].booking_text;
  }
}
