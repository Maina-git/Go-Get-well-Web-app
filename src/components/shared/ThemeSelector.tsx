import { useThemeStore } from '@/store/themeStore'
const ThemeSelector = () => {
  const { specialty, setSpecialty } = useThemeStore()
  

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as 'default' | 'theme1' | 'theme2'
    setSpecialty(selected)
  }

  return (
    <select
      value={specialty}
      onChange={handleChange}
      className="bg-white px-5 py-2 rounded text-pink-800 border outline-none">
      <option value="default">Default</option>
      <option value="theme1">Organ Transplant</option>
      <option value="theme2">Cosmetic Surgery</option>
    </select>
  )
}

export default ThemeSelector











