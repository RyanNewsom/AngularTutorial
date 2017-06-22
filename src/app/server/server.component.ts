import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  getServerStatus() {
    return "Good to go";
  }

  serverId = 10;
  serverStatus:string = 'offline';
}
