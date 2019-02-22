

export class Plan
{
   public title : string;
   public imagePath : string; 
   public intro : string;
   public desc : string;

   constructor(title : string, imagePath : string, intro : string, desc : string )
   {
        this.title = title;
        this.imagePath = imagePath;
        this.intro = intro;
        this.desc = desc;
   }
}