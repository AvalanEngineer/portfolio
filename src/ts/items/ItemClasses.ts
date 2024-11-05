export class ProjectItem{
    title:string;
    subTitle:string;
    description:string;
    languages:string[];
    github_code_url:string;
    external_url:string;
    image:string;
    image_type:string;
    constructor(title:string, subTitle:string, description:string, languages:string[], github_code_url:string, external_url:string, image:string,image_type:string){
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.languages = languages;
        this.github_code_url = github_code_url;
        this.external_url = external_url;
        this.image = image;
        this.image_type = image_type;
    }
}