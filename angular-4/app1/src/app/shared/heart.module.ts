export class Heart {
  constructor(
    public filled : boolean,
    public urlFilledHeart: string = '/assets/coracao_cheio.png',
    public urlEmptyHeart: string = '/assets/coracao_vazio.png'
  ){}

  public showHeart() : string {
    if(this.filled) return this.urlFilledHeart;

    return this.urlEmptyHeart;
  }
}
