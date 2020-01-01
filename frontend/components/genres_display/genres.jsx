import React from "React";
import ShowItem from '../logged_in_main/shows/show_item_container';

class Genres extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        let genreId = this.props.match.params.genreId;
        this.props.findGenre(genreId);
        // this.props.findEpisode();
        // this.props.findShows();
    }


    render() {
        let chosengenre;
        let genreshows
        let row1Shows;
        let row2Shows;
        
        let episodeslist;
        let showsnums;
        var x = 1
        let genresul = 'genres-shows-ul';
       

        if(this.props.genre) {
            chosengenre = this.props.genre.genre_type
            
        }

        if (this.props.shows && this.props.episodes && this.props.genre && x === 1) {   
            
            
            // debugger
            episodeslist = this.props.episodes;
            let showslist = this.props.shows;
            let firstthree = showslist.slice(0,3)
            console.log(firstthree)
            let secondthree = showslist.slice(3)
            console.log(secondthree)
            showsnums = this.props.genre.show_ids
            // debugger

            row1Shows = firstthree.map((show) => {
                
                let genreepisodes;
                genreepisodes = episodeslist.filter(episode => showsnums.includes(show.id) && show.id === episode.show_id)
                
                console.log('postgenreshows')
                if(showsnums.includes(show.id)) { 
                    
                    console.log('should return show item')
                    
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={genreepisodes} key={show.id} />
                    </li>
                    ) 
                } else {
                    console.log('not making show item')
                }
               

                
            })
            row2Shows = secondthree.map((show) => {
                
                let genreepisodes;
                genreepisodes = episodeslist.filter(episode => showsnums.includes(show.id) && show.id === episode.show_id)
                
                console.log('postgenreshows')
                if(showsnums.includes(show.id)) { 
                    
                    console.log('should return show item')
                    
                    return (<li className='genres-shows-listitem'>
                        <ShowItem show={show} episodes={genreepisodes} genrespage={true} key={show.id} />
                    </li>
                    ) 
                } else {
                    console.log('not making show item')
                }
               

                
            })
            x += 1
        }
            
        // }
        // if ( this.props.shows && this.props.shows.length > 0) {
            

        //     genresul = `genres-shows-ul ${this.props.shows.length}`
        //     console.log(genresul)
        // }
        

        return (
            <div className ='genres-main-container'>
                <div className ='genre-main-title'>
                    <h1 className='genre-title'>
                        {chosengenre}
                    </h1>
                   
                </div>

                <div className='genres-shows-container'>
                    <div className='genres-shows-list-container'>
                        <div className='genres-shows-list-title'>
                            <h2 className='genres-shows-title'>
                                 for you
                            </h2>
                            <i className='material-icons'>
                                chevron_right
                            </i>
                           
                        </div>
                        <div className='genres-shows-list-container'>
                            <div className='genres-shows-list'>
                                <ul className='logged-shows-ul'>
                                    <div className='row1-shows-wrap'>
                                        {row1Shows}
                                    </div>

                                </ul>
                                <ul className='logged-shows-ul2'>
                                    <div className='row2-shows-wrap'>
                                        {row2Shows}
                                    </div>
                                </ul>
                              
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Genres;