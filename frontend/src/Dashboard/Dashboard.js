import MenuCreate from "../Menus/MenuCreate"

function Dashboard() {

    return (
        <>
            <div className="m-4 p-4">
                <h1> <i class="fas fa-tools"></i> Tablero de Gestión</h1>
                <p className="m-2 p-2">Aqui puedes consultar y actualizar los parametros del sistemas como tablas y demas.</p>
            </div>
            <div className="row shadow m-2">
                <div className="col">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-menu-tab" data-bs-toggle="tab" data-bs-target="#nav-menu" type="button" role="tab" aria-controls="nav-menu" aria-selected="true">Menu</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        
                        <div class="tab-pane fade show active" id="nav-menu" role="tabpanel" aria-labelledby="nav-menu-tab">
                            <div>
<div className="m-4">
    <button className="btn primary">Nuevo</button>
</div>

                            <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;
