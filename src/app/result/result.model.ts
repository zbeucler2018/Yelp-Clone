/*
  SearchResult is a data-structure that holds an individual
  record from a yelp buisness search
 */
export class SearchResult {
  id: string;
  name: string;
  thumbnailUrl: string;
  url: string;
  price: number;
  location: string; // not number bc if zipcode starts with zero
  state: string;
  distance: number;
  rating: number;
  
  phone: string;      // extra info
  is_closed: boolean; // ^^
  address: string;    // ^^
    
  constructor(obj?: any) {
    this.id              = obj && obj.id             || null;//if not value is returned, return null
    this.name           = obj && obj.name            || null;// ^^^
    this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;// ^^^
    this.price           = obj && obj.price          || null;// ^^^
    this.location       = obj && obj.location        || null;// ^^^
    this.state          = obj && obj.state           || null;// ^^^
    this.distance       = obj && obj.distance        || null;// ^^^
    this.rating         = obj && obj.rating          || null;// ^^^
    
    this.phone          = obj && obj.phone           || null; // for extra info
    this.is_closed      = obj && obj.is_closed       || null; // ^^
    this.address        = obj && obj.address         || null; // ^^
    
    this.url        = obj && obj.url       ||
                              `https://api.yelp.com/v3/businesses/${this.id}`; //if buisness doesn't have it's own website, use the yelp one
  }

}

