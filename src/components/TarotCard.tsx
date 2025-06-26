
import React from 'react';
import { Card } from '../types/tarot';
import './TarotCard.css';
import { useTranslation } from 'react-i18next';

interface TarotCardProps {
  card: Card;
}

const TarotCard: React.FC<TarotCardProps> = ({ card }) => {
  const { t } = useTranslation();

  return (
    <div className="tarot-card">
      <div className="tarot-card-ascii">{card.ascii}</div>
      <h3 className="tarot-card-name">{t(card.name)}</h3>
      <p className="tarot-card-meaning">{t(card.meaning_up)}</p>
    </div>
  );
};

export default TarotCard;
