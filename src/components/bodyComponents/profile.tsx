import React from 'react';
import { Index } from './index.tsx'
import { FaGithub, FaKaggle } from 'react-icons/fa';

export const Profile = () => {
    return (
        <section id="profile" className="mb-8">
            <Index name="Profile" />
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* 画像 */}
                <img 
                src="./images/profile.png" 
                alt="Placeholder profile" 
                className="w-32 h-32 rounded-full object-cover shadow-md" 
                />


                {/* 説明文 */}
                <div className="flex flex-col md:items-start items-center text-center md:text-left">
                    {/* アイコンを横並び */}
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-bold mb-2">Yutaro Ito</h1>
                        {/* GitHub */}
                        <a
                        href="https://github.com/yutarooo216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black ml-1"
                        aria-label="GitHub"
                        >
                        <FaGithub size={20} />
                        </a>
                        {/* Kaggle */}
                        <a
                        href="https://www.kaggle.com/yutaroito" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black ml-1"
                        aria-label="Kaggle"
                        >
                        <FaKaggle size={20} />
                        </a>
                    </div>
                    <p className="text-base text-gray-700">
                        大学院修士課程で分子生物学、バイオインフォマティクスを専攻。<br />
                        メーカー研究所で素材探索の研究に従事、東京大学に出向しアルツハイマー病の研究に取り組む。<br />
                        ITメーカーで医療データを中心に、データの利活用のためのシステム構築に従事。<br />
                        副業としてバイオインフォマティクスの受託研究員を兼務、論文執筆、解析パイプライン実装を担当。<br />
                        現在は外資製薬企業でエンジニアとして勤務。<br />
                    </p>
                    <p className="text-base text-gray-700 font-bold mt-1">
                        技術領域: Python, R, SQL, JavaScript (React), Shell script, Terraform, AWS, Kubernetes<br />
                    </p>
                </div>
            </div>
        </section>
    )
}