function BlogCard(props){
    
    return(
         <div class="container p-5">
                    <div class="Latestnews">
                        <img src={props.img} className="img-hover" />
                        <button class=" m-0 date rounded "> {props.date} </button>
                        <p>{props.title}</p>
                        <button className="quotes  m-0 rounded">READ MORE </button>
                    </div>
        </div>
    )
}
export default BlogCard