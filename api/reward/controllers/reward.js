'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async trade(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.services.reward.findOne({ id }); // find a item point
        ctx.state.user.score = ctx.state.user.score - entity.points;

        strapi.query('user', 'users-permissions').update(
            { id: ctx.state.user.id },ctx.state.user
        )

        return {
            response:200
        };
    }
};
