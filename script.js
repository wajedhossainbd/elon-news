const loadNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=elon%20musk&from=2022-08-08&sortBy=publishedAt&language=en&apiKey=c9a038b5e98348119edacf8a5d466daa`);
    const data = await res.json();
    displayNews(data.articles);
 
 
 }




const displayNews = (allnews) => {

console.log(allnews);

const newsContainer = document.getElementById("news-container");

allnews.forEach((news) => {

    const newNewsDiv = document.createElement('div');
           newNewsDiv.innerHTML = `
           <div class="col">
           <div class="card m-2">
           <img style="width: auto; height: 300px;" src="${news.urlToImage}" alt="Post Image">
           <div class="rows d-flex justify-content-evenly my-3">
               <div class="col-6">
                   <div id="author-tag" class="tag">
                       <h4 id="author-name" class="tag-text"><i
                               class="fa-sharp fa-solid fa-pen-nib tag-icon border-danger"></i>${news.author ? news.author.slice(0,19 ) : 'Author not found'}
                       </h4>
                   </div>
                   <div id="source-tag" class="tag">
                       <h4 id="author-name" class="tag-text"><i
                               class="fa-solid fa-earth-americas tag-icon border-primary"></i>${news.source ? news.source.name.slice(0,19 ) : 'Author not found'}
                       </h4>
                   </div>
               </div>

               <div class="col-6">
                   <div id="date-tag" class="tag">
                       <h4 id="author-name" class="tag-text"><i
                               class="fa-regular fa-calendar-days tag-icon border-success"></i>${news.publishedAt ? news.publishedAt.slice(0,10 ) : 'No date found'}
                       </h4>
                   </div>
                   <div id="time-tag" class="tag">
                       <h4 id="author-name" class="tag-text"><i
                               class="fa-regular fa-clock tag-icon border-info"></i>${news.publishedAt ? news.publishedAt.slice(11,19 ) : 'No date found'}
                       </h4>
                   </div>
               </div>
           </div>
           <div class="card-body">
               <div id="card-title" class="mb-3">
                   <h5 class="card-title fw-bold fs-6">${news.title}</h5>
               </div>
               <div id="card-details">
                   <p class="card-text">${news.description}</p>
               </div>

               <div class="d-flex justify-content-center">
                   <a href="#" class="btn btn-primary mt-3 ">READ MORE</a>
               </div>
           </div>
           </div>
         </div>`;
    
         newsContainer.appendChild(newNewsDiv)
        });
}


//     const newsContainer = document.getElementById("news-container");
//     newsContainer.textContent = '';

//      allNews.forEach((news) => {
//         const newNewsDiv = document.createElement('div');
//         newNewsDiv.classList.add ('card', 'col-4', 'border-5', 'border-top', 'border-warning', 'rounded-4')
//        newNewsDiv.innerHTML = `
//              <img src="images/avnsgqp4.jpg" class="card-img-top mt-2 rounded-top shadow-sm" alt="Post Image">
//                 <div class="rows d-flex justify-content-evenly my-3">
//                     <div class="col-6">
//                         <div id="author-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-sharp fa-solid fa-pen-nib tag-icon border-danger"></i>MATT O'BRIEN
//                             </h4>
//                         </div>
//                         <div id="source-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-solid fa-earth-americas tag-icon border-primary"></i>CHICAGO TRIBUNE
//                             </h4>
//                         </div>
//                     </div>

//                     <div class="col-6">
//                         <div id="date-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-regular fa-calendar-days tag-icon border-success"></i>2022-09-07
//                             </h4>
//                         </div>
//                         <div id="time-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-regular fa-clock tag-icon border-info"></i>10:33 PM
//                             </h4>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card-body">
//                     <div id="card-title" class="mb-3">
//                         <h5 class="card-title fw-bold fs-6">Musk cited possible “World War III” as reason to break
//                             Twitter deal, text
//                             shows</h5>
//                     </div>
//                     <div id="card-details">
//                         <p class="card-text">Musk's legal team has argued that the allegations made by Peter Zatko to
//                             U.S.
//                             officials may help bolster his claims that Twitter misled him and the public about the
//                             company's
//                             problem with fake and “spam” accounts.</p>
//                     </div>

//                     <div class="d-flex justify-content-center">
//                         <a href="#" class="btn btn-primary mt-3 ">READ MORE</a>
//                     </div>

//                 </div>
//      `;

//      newsContainer.appendChild(newNewsDiv)
//     });
// }

    // 


    // const newsFound = document.getElementById('news-found');
    // newsFound.innerText = allNews.length;
    // newsContainer.textContent = '';
    // const noNewsFound = document.getElementById('no-news-found');


//    // News found area start


//     // if (allNews.length == 0) {
//     //    noNewsFound.classList.remove('d-none')
//     // } else {
//     //    noNewsFound.classList.add('d-none')
//     // }
//     // allNews.sort((a, b) => {
//     //    return b.total_view - a.total_view;
//     // });
 
//        const newNewsDiv = document.createElement('div');
//        newNewsDiv.classList.add ('card', 'col-4', 'border-5', 'border-top', 'border-warning', 'rounded-4')
//        newNewsDiv.innerHTML = `
//              <img src="images/avnsgqp4.jpg" class="card-img-top mt-2 rounded-top shadow-sm" alt="Post Image">
//                 <div class="rows d-flex justify-content-evenly my-3">
//                     <div class="col-6">
//                         <div id="author-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-sharp fa-solid fa-pen-nib tag-icon border-danger"></i>MATT O'BRIEN
//                             </h4>
//                         </div>
//                         <div id="source-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-solid fa-earth-americas tag-icon border-primary"></i>CHICAGO TRIBUNE
//                             </h4>
//                         </div>
//                     </div>

//                     <div class="col-6">
//                         <div id="date-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-regular fa-calendar-days tag-icon border-success"></i>2022-09-07
//                             </h4>
//                         </div>
//                         <div id="time-tag" class="tag">
//                             <h4 id="author-name" class="tag-text"><i
//                                     class="fa-regular fa-clock tag-icon border-info"></i>10:33 PM
//                             </h4>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card-body">
//                     <div id="card-title" class="mb-3">
//                         <h5 class="card-title fw-bold fs-6">Musk cited possible “World War III” as reason to break
//                             Twitter deal, text
//                             shows</h5>
//                     </div>
//                     <div id="card-details">
//                         <p class="card-text">Musk's legal team has argued that the allegations made by Peter Zatko to
//                             U.S.
//                             officials may help bolster his claims that Twitter misled him and the public about the
//                             company's
//                             problem with fake and “spam” accounts.</p>
//                     </div>

//                     <div class="d-flex justify-content-center">
//                         <a href="#" class="btn btn-primary mt-3 ">READ MORE</a>
//                     </div>

//                 </div>
//      `;
//        newsContainer.appendChild(newNewsDiv)
//     };

    loadNews();
