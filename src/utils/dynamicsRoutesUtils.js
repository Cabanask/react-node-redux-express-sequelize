import TemplateArticleController from '../components/TemplatesRoutes/TemplateArticleController';
import Home from '../components/home';

export const getTemplateById = function(id) {
	console.log('ID DU TEMPLATE',id)
	let component = Home;
	if(id == 1) {
		component = TemplateArticleController;
	}
	
	return component;
};




