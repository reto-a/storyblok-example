import { Injectable } from '@angular/core';
import Client from 'storyblok-js-client';

@Injectable({
    providedIn: 'root'
})
export class StoryblokService {
    private sbClient = new Client({
        accessToken: 'iISWKdTvyrsFt4hM8wFB5Att'
    });

    constructor() { }

    /**
     * Método par obtener una story especifica.
     * @param  {string} slug Ruta para identificar la story.
     * @param  {object} params?
     * @returns Promise
     */
    async getStory(slug: string, params?: object): Promise<any> {
        const res = await this.sbClient.getStory(slug, params);
        return res.data.story.content;
    }

    /**
     * Método para obtener todas las storys.
     * @param  {object} params?
     * @returns Promise
     */
    async getStories(params?: object): Promise<any> {
        const res = await this.sbClient.getStories(params);
        return res.data;
    }
}
