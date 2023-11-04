
export default function Edit(){
    return (
        <div>
            <form action="/stats" enctype="multipart/form-data" method="post">
            <div class="form-group">
             <input type="file" class="form-control-file" /><br/>
             <input type="text" class="form-control" placeholder="enter message" /><br/>
            <input type="text" placeholder="enter name" /> <br/>
            <input type="submit" value="Get me the stats!" class="btn btn-default"/> 
            </div>
           </form>
           
        </div>
    )
}