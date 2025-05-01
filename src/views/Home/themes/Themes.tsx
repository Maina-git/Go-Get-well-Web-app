import { useThemeStore } from '@/store/themeStore'

const themes = [
  { id: 'default', label: 'Default Theme' },
  { id: 'theme1', label: 'Organ Transplant' },
  { id: 'theme2', label: 'Cosmetic Surgery' },
]

export default function Themes() {
  const { specialty, setSpecialty } = useThemeStore()

  return (
    <div className="p-8">
      <h1 className="text-5xl mb-4 text-pink-800">Select a Theme</h1>
      <div className="grid grid-cols-3 gap-6">
        {themes.map(theme => (
          <div
            key={theme.id}
            onClick={() => setSpecialty(theme.id as any)}
            className={`p-6 border cursor-pointer rounded-xl ${
              specialty === theme.id ? 'bg-primary text-white' : 'bg-black'
            }`}
          >
            <h2 className="text-xl text-white">{theme.label}</h2>
            <p className="text-sm mt-2 text-white">Preview the {theme.label} design</p>
          </div>
        ))}
      </div>
    </div>
  )
}
