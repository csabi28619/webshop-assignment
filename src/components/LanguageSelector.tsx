import React from 'react'

type Language = {
    name: string
    flag: string
}

const LanguageSelector = () => {
    const Languages: Language[] = [
        { name: 'English', flag: '🇺🇸' },
        { name: 'Spanish', flag: '🇪🇸' },
        { name: 'French', flag: '🇫🇷' },
    ]
  return (
    <select>
      {Languages.map((lang) => (
        <option key={lang.name} value={lang.name}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector