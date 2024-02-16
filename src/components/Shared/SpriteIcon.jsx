import PropTypes from 'prop-types';
import Sprite from '@/assets/sprite.svg';

export const SpriteIcon = ({ symbol }) => (
  <svg>
    <use href={`${Sprite}#${symbol}`} />
  </svg>
);

SpriteIcon.propTypes = {
  symbol: PropTypes.string.isRequired,
};
