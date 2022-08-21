function Book({data}){
    return (

        <div className="card">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
            <h5>{data.subtitle}</h5>

                <table className="table">
                  <tbody>
                  <div className="text-success font-weight-bold">
                    <tr>
                        <td>Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td>Subtitle:</td>
                        <td>{data.subtitle}</td>
                    </tr>
                    <tr>
                        <td>Author:</td>
                        <td>{data.author}</td>
                    </tr>
                    <tr>
                        <td>Publisher:</td>
                        <td>{data.publisher}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{data.description}</td>
                    </tr>
                    </div>
                  </tbody>
                </table>

            </div>
        </div>

)}