<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Datos de Sensor De Turvidez</title>
<style>

h1 {
    text-align: center;
    display: flex;
    font-size: 1.5em;
  margin: 15px auto ;
    width: 50%;
}

h2 {
    width: 30%;
    display: inline;
    font-size: 1.2em;
    margin-top: 1.5em;
    border-bottom: solid 1px rgb(255, 255, 255);
    margin:0.5em;
    text-align: center
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto ;

}

th,
td {

    text-align: left;
    padding: 8px;
    width: 100%;
}

th {
    background-color: #103F6E;
    color: white;
}
tr th{
margin: 1em 0;
}
tr:nth-child(even) {
    background-color: #59ACE7;
    color:#000000;
}
.sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
img{
    width: auto;
    height: 30px;
}

    </style>
</head>

<body>
    <section class="sec">
    
        <h1> Datos de Sensor De Turvidez</h1>
    <h2>Reporte pdf</h2>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>
    </section>
    <table>
        <thead>
            <tr>

                <th># id </th>
                <th>Nivel de Turvidez</th>
     
                <th>Creacion de registro</th>
                <th>actualizacion de registro</th>
            </tr>
        </thead>
        <tbody>
            @foreach($Turbidez as $turb)
            <tr>
                <td>{{$turb->id}}</td>
            <td>{{$turb->nivel_turbidez	}}</td>

            <td>{{$turb->created_at}}</td>
            <td>{{$turb->updated_at}}</td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <th>Total de Registros:</th>
                <td>{{ count($Turbidez) }}</td>
            </tr>
        </tfoot>
    </table>
</body>

</html>