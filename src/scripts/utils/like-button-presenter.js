import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, resto, favoriteResto }) {
    this.__likeButtonContainer = likeButtonContainer;
    this.__resto = resto;
    this.__favoriteResto = favoriteResto;

    await this.__renderButton();
  },

  async __renderButton() {
    const { id } = this.__resto;

    if (await this.__isRestoExist(id)) {
      this.__renderLiked();
    } else {
      this.__renderLike();
    }
  },

  async __isRestoExist(id) {
    const resto = await this.__favoriteResto.getResto(id);
    return !!resto;
  },

  __renderLike() {
    this.__likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.__favoriteResto.putResto(this.__resto);
      this.__renderButton();
    });
  },

  __renderLiked() {
    this.__likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.__favoriteResto.deleteResto(this.__resto.id);
      this.__renderButton();
    });
  },
};

export default LikeButtonPresenter;
