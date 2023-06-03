import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { getImages } from 'servises/pixabayAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';

import {Loader} from './Loader/Loader'
import { Button } from './Button/Button';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  succes: 'succes',
  error: 'error'
}

export class App extends Component {
  state = {
    images: [],
    search: '',
    page: 1,
    isModalOpen: false,
    status: STATUS.idle,
  }

  handleFormSubmit = search => {
    this.setState({ search, images: [], status: STATUS.loading, page:1 })
  }

  handleOnButtonClick = async () => {
      this.setState(prevState => ({  status: STATUS.loading, page: prevState.page + 1}));
  }

  async componentDidUpdate(_, prevState) {
    const { search, page} = this.state; 
   
    if (search !== prevState.search || page !== prevState.page) {
      try {
        const { search, page } = this.state;
        const images = await getImages({ search, page });
        this.setState(state => ({images: [...state.images, ...images], status: STATUS.succes}));
    } catch (error) {
        this.setState({status: STATUS.error})
        console.error(error);
      }
    }

  }
  
  render() {
    const { images, page, status} = this.state
       
    return (
      <div className='App'>
        
        <Searchbar onSubmit={this.handleFormSubmit} />
     
        {(status === STATUS.succes || status === STATUS.loading) && < ImageGallery
          images={images}
           />}
        {status === STATUS.loading && <Loader/>}
       
        {(images.length > 0 && status === STATUS.succes)  && <Button onButtonClick={()=>{this.handleOnButtonClick(page)}} />}
        
      </div>
    )
  }
}




