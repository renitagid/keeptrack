// This is a TypeScript class that represents a project.
export class Location {
  // This is a TypeScript property that is a number or undefined.

  ID: number = 0;
  DISTRICT: string = "";
  CountyNum: number = 0;
  COUNTY: string = "";
  NameMobileWeb: string = "";
  LocationMobileWeb: string = "";
  DescriptionMobileWeb: string = "";
  PHONE_NMBR: string = "";
  FEE: string = "";
  PARKING: string = "";
  DSABLDACSS: string = "";
  RESTROOMS: string = "";
  VISTOR_CTR: string = "";
  DOG_FRIENDLY: string = "";
  EZ4STROLLERS: string = "";
  PCNC_AREA: string = "";
  CAMPGROUND: string = "";
  SNDY_BEACH: string = "";
  DUNES: string = "";
  RKY_SHORE: string = "";
  BLUFF: string = "";
  STRS_BEACH: string = "";
  PTH_BEACH: string = "";
  BLFTP_TRLS: string = "";
  BLFTP_PRK: string = "";
  WLDLFE_VWG: string = "";
  TIDEPOOL: string = "";
  VOLLEYBALL: string = "";
  FISHING: string = "";
  BOATING: string = "";
  LIST_ORDER: string = "";
  GEOGR_AREA: string = "";
  LATITUDE: number = 0;
  LONGITUDE: number = 0;
  Photo_1: string =
    "";
  Photo_2: string =
    "";
  Photo_3: string = "";
  Photo_4: string = "";
  Bch_whlchr: string = "";
  BIKE_PATH: string = "";
  BT_FACIL_TYPE: string = "";

  //get is a TypeScript accessor that returns a boolean value. It returns true if the id property is undefined. Otherwise, it returns false. This is a TypeScript shorthand for writing a function that returns a boolean value. It is equivalent to:
  get isNew(): boolean {
    return this.ID === undefined;
  }

  // This is a TypeScript constructor that takes an initializer object.
  constructor(initializer?: any) {
    if (!initializer) return;

    // This is a TypeScript conditional operator that checks if the initializer object has an id property. If it does, it assigns the value to the id property of the class. If it doesn't, it assigns undefined to the id property of the class.
    this.ID = initializer.id ?? this.ID;
    this.DISTRICT = initializer.district ?? this.DISTRICT;
    this.CountyNum = initializer.CountyNum ?? this.CountyNum;
    this.COUNTY = initializer.COUNTY ?? this.COUNTY;
    this.NameMobileWeb = initializer.NameMobileWeb ?? this.NameMobileWeb;
    this.LocationMobileWeb = initializer.LocationMobileWeb ?? this.LocationMobileWeb;
    this.DescriptionMobileWeb = initializer.DescriptionMobileWeb ?? this.DescriptionMobileWeb;
    this.PHONE_NMBR = initializer.PHONE_NMBR ?? this.PHONE_NMBR;
    this.FEE = initializer.FEE ?? this.FEE;
    this.PARKING = initializer.PARKING ?? this.PARKING;
    this.DSABLDACSS = initializer.DSABLDACSS ?? this.DSABLDACSS;
    this.RESTROOMS = initializer.RESTROOMS ?? this.RESTROOMS;
    this.VISTOR_CTR = initializer.VISTOR_CTR ?? this.VISTOR_CTR;
    this.DOG_FRIENDLY = initializer.DOG_FRIENDLY ?? this.DOG_FRIENDLY;
    this.EZ4STROLLERS = initializer.EZ4STROLLERS ?? this.EZ4STROLLERS;
    this.PCNC_AREA = initializer.PCNC_AREA ?? this.PCNC_AREA;
    this.CAMPGROUND = initializer.CAMPGROUND ?? this.CAMPGROUND;
    this.SNDY_BEACH = initializer.SNDY_BEACH ?? this.SNDY_BEACH;
    this.DUNES = initializer.DUNES ?? this.DUNES;
    this.RKY_SHORE = initializer.RKY_SHORE ?? this.RKY_SHORE;
    this.BLUFF = initializer.BLUFF ?? this.BLUFF;
    this.STRS_BEACH = initializer.STRS_BEACH ?? this.STRS_BEACH;
    this.PTH_BEACH = initializer.PTH_BEACH ?? this.PTH_BEACH;
    this.BLFTP_TRLS = initializer.BLFTP_TRLS ?? this.BLFTP_TRLS;
    this.BLFTP_PRK = initializer.BLFTP_PRK ?? this.BLFTP_PRK;
    this.WLDLFE_VWG = initializer.WLDLFE_VWG ?? this.WLDLFE_VWG;
    this.TIDEPOOL = initializer.TIDEPOOL ?? this.TIDEPOOL;
    this.VOLLEYBALL = initializer.VOLLEYBALL ?? this.VOLLEYBALL;
    this.FISHING = initializer.FISHING ?? this.FISHING;
    this.BOATING = initializer.BOATING ?? this.BOATING;
    this.LIST_ORDER = initializer.LIST_ORDER ?? this.LIST_ORDER;
    this.GEOGR_AREA = initializer.GEOGR_AREA ?? this.GEOGR_AREA;
    this.LATITUDE = initializer.LATITUDE ?? this.LATITUDE;
    this.LONGITUDE = initializer.LONGITUDE ?? this.LONGITUDE;
    this.Photo_1 = initializer.Photo_1 ?? this.Photo_1;
    this.Photo_2 = initializer.Photo_2 ?? this.Photo_2;
    this.Photo_3 = initializer.Photo_3 ?? this.Photo_3;
    this.Photo_4 = initializer.Photo_4 ?? this.Photo_4;
    this.Bch_whlchr = initializer.Bch_whlchr ?? this.Bch_whlchr;
    this.BIKE_PATH = initializer.BIKE_PATH ?? this.BIKE_PATH;
    this.BT_FACIL_TYPE = initializer.BT_FACIL_TYPE ?? this
  }
}
